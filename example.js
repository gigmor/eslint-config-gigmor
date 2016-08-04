/*eslint-disable no-unused-vars*/

import thing from './index.js';

const
  PI = Math.PI,
  CONSTANT_ONE = 1,
  CONSTANT_TWO = 2;

var
  someVar = {
    prop: 'key',
    name: [ 'value' ]
  },
  someString = '',
  someArray = [ 1, 2, 3, 4 ],
  functionExpression;

functionExpression = function( ...restArgs ) {
  var fnScoped = Array.isArray( restArgs[ 0 ]) ? restArgs[ 0 ] : restArgs;

  if ( typeof fnScoped[ 0 ] === 'string' ) {
    fnScoped = fnScoped.map( parseIntMap );
  }

  return fnScoped.reduce(( sum, next ) => sum + next, 0 );
};

/**
 * A function for mapping parseInt over an array with radix 10
 * @param {String|Number} num - A number as a string or number
 * @returns {Number} a number as a number
 */
function parseIntMap( num ) {
  return typeof num === 'string' ? parseInt( num, 10 ) : num;
}

/**
 * A function version of the . (dot) operator. AKA "get"
 * @param {String} name -- the property name
 * @param {Object} object -- the object to lookup on
 * @returns {*} the value of the property "name" on "object"
 */
function namedFunction( name = someString, object = someVar ) {
  return object[ name ];
}
