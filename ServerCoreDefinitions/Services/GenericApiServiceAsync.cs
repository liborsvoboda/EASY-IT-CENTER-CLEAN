using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EasyITCenter.Services {


    // Generic Repository interface takes two generic paremeters DbContext and model class type
    public interface IGenericApiServiceAsync<DbEntity, Tentity> : IDisposable where DbEntity : EasyITCenterContext where Tentity : class {

        Task<Tentity> GetByIdAsync(int id);

        Task<Tentity> GetAsync(Expression<Func<Tentity, bool>> predicate);

        Task<EntityEntry<Tentity>> AddAsync(Tentity entity);

        Task<EntityEntry<Tentity>> UpdateAsync(Tentity entityToUpdate);

        Task<EntityEntry<Tentity>> DeleteAsync(int id);

        Task<EntityEntry<Tentity>> DeleteAsync(Tentity entityToDelete);

        Task<int> SaveChangesAsync();

        Task<int> TotalAsync(Expression<Func<Tentity, bool>> predicate);

        Task<bool> ExistAsync(Expression<Func<Tentity, bool>> predicate);

        Task<List<Tentity>> GetListAsync(
            Expression<Func<Tentity, bool>>? filter = null,
            Func<IQueryable<Tentity>, IOrderedQueryable<Tentity>>? orderBy = null,
            string includeProperties = "", int PageNo = 0, int PageSize = 0);

        Task<List<Tentity>> GetFromSqlAsync(string Sql);
    }


    /// <summary>
    /// Generic Repository implementing generic interface 
    /// Takes two generic parameters DbContext and
    /// model class type
    /// </summary>
    /// <typeparam name="DbEntity"></typeparam>
    /// <typeparam name="Tentity"></typeparam>
    public class GenericApiServiceAsync<DbEntity, Tentity> : IGenericApiServiceAsync<DbEntity, Tentity> where DbEntity : EasyITCenterContext where Tentity : class {
        private readonly DbContext _context;
        private readonly DbSet<Tentity> dbSet;

        public GenericApiServiceAsync(DbEntity context) {
            _context = context;
            dbSet = context.Set<Tentity>();
            Query = dbSet.AsQueryable<Tentity>();
        }

        internal IQueryable<Tentity> Query { get; set; }

        public virtual async Task<Tentity> GetByIdAsync(int id) {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task<Tentity> GetAsync(Expression<Func<Tentity, bool>> predicate) {
            return await Query.FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<EntityEntry<Tentity>> AddAsync(Tentity entity) {
            EntityEntry<Tentity> eentity = await dbSet.AddAsync(entity);
            eentity.State = EntityState.Added;
            return eentity;
        }

        public virtual async Task<EntityEntry<Tentity>> UpdateAsync(Tentity entity) {
            EntityEntry<Tentity> eentity = dbSet.Update(entity);
            _context.Entry(entity).State = EntityState.Modified;
            return eentity;
        }

        public virtual async Task<EntityEntry<Tentity>> DeleteAsync(int id) {
            Tentity entityToDelete = await GetByIdAsync(id)!;
            _context.Entry(entityToDelete).State = EntityState.Deleted;
            EntityEntry<Tentity> eentity = await DeleteAsync(entityToDelete!);
            return eentity;
        }

        public virtual async Task<EntityEntry<Tentity>> DeleteAsync(Tentity entityToDelete) {
            EntityEntry<Tentity> eentity = dbSet.Remove(entityToDelete);
            _context.Entry(entityToDelete).State = EntityState.Deleted;
            return eentity;
        }

        public virtual async Task<int> TotalAsync(Expression<Func<Tentity, bool>> predicate) {
            return await Query.CountAsync(predicate);
        }

        public virtual async Task<bool> ExistAsync(Expression<Func<Tentity, bool>> predicate) {
            return await Query.AnyAsync(predicate);
        }

        public virtual async Task<int> SaveChangesAsync() {
            return await _context.SaveChangesAsync();
        }

       
        public virtual async Task<List<Tentity>> GetListAsync(
            Expression<Func<Tentity, bool>>? filter = null,
            Func<IQueryable<Tentity>, IOrderedQueryable<Tentity>>? orderBy = null,
            string includeProperties = "", int PageNo = 0, int PageSize = 0) {
            //return await QueryEntity(filter, orderBy, includeProperties).ToListAsync();
            var query = QueryEntity(filter, orderBy, includeProperties);
            if (PageSize + PageNo > 0) {
                return await query.Skip(PageNo * PageSize).Take(PageSize).ToListAsync();
            }
            return await query.ToListAsync();
        }

        public virtual async Task<List<Tentity>> GetFromSqlAsync(string sql) {
            return dbSet.FromSqlRaw(sql).ToList();
        }

        private IQueryable<Tentity> QueryEntity(
            Expression<Func<Tentity, bool>>? filter = null,
            Func<IQueryable<Tentity>, IOrderedQueryable<Tentity>>? orderBy = null,
            string includeProperties = "") {
            //IQueryable<Tentity> query = dbSet;

            if (filter != null) {
                Query = Query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)) {
                Query = Query.Include(includeProperty);
            }

            if (orderBy != null) {
                return orderBy(Query);
            }
            else {
                return Query;
            }
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing) {
            if (!disposed) {
                if (disposing) {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose() {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}