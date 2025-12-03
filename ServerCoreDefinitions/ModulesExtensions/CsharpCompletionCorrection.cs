/*
* Server Core Web Helpers
* System Extensions for Correct Core working
* DataTypes Conversion Support, etc.
*/

namespace EasyITCenter.ServerCoreStructure {

    public interface IScriptContext {
        string Arguments { get; }

        IReadOnlyList<string> Messages { get; }
    }

    public interface IScriptGlobals {
        IScriptContext Context { get; }
    }
}