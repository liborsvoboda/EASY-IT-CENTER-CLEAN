"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*  

5kyu - Simple Assembler Interpreter

This is the first part of this kata series. Second part is here.

We want to create a simple interpreter of assembler which will support the following instructions:

mov x y - copies y (either a constant value or the content of a register) into register x
inc x - increases the content of register x by one
dec x - decreases the content of register x by one
jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward), but only if x (a constant or a register) is not zero
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

The function will take an input list with the sequence of the program instructions and will return a dictionary with the contents of the registers.

Also, every inc/dec/jnz on a register will always be followed by a mov on the register first, so you don't need to worry about uninitialized registers.

Example
simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1','inc a'])

''' visualized:
mov a 5
inc a
dec a
dec a
jnz a -1
inc a
''''
The above code will:

set register a to 5,
increase its value by 1,
decrease its value by 2,
then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
and then increase its value by 1, leaving register a at 1
So, the function should return

{'a': 1}
This kata is based on the Advent of Code 2016 - day 12


*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function simple_assembler(program) {
  var obj = {};

  for (var i = 0; i < program.length; i++) {
    var _program$i$split = program[i].split(" "),
        _program$i$split2 = _slicedToArray(_program$i$split, 3),
        order = _program$i$split2[0],
        vari = _program$i$split2[1],
        opt = _program$i$split2[2];

    if ('mov' === order) {
      if (isNaN(opt)) obj[vari] = obj[opt];else obj[vari] = parseInt(opt);
    } else if ('inc' === order) obj[vari] = ++obj[vari];else if ('dec' === order) obj[vari] = --obj[vari];else if ('jnz' === order && obj[vari] !== 0) i = i + parseInt(opt) - 1;
  }

  ;
  return obj;
}