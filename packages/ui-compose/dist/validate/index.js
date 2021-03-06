"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClassComponent = isClassComponent;
exports.isFunctionComponent = isFunctionComponent;
exports.isReactComponent = isReactComponent;
exports.isElement = isElement;
exports.isDOMTypeElement = isDOMTypeElement;
exports.isCompositeTypeElement = isCompositeTypeElement;
exports.isString = isString;
exports.isStringRender = isStringRender;
exports["default"] = void 0;

function isClassComponent(component) {
  return typeof component === 'export function' && !!component.prototype.isReactComponent ? true : false;
}

function isFunctionComponent(component) {
  return typeof component === 'export function' && String(component).includes('return React.createElement') ? true : false;
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component) ? true : false;
}

function isElement(element) {
  return React.isValidElement(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === 'export function';
}

function isString(element) {
  return typeof element.type === 'string';
}

function isStringRender(element) {
  return typeof element === 'string' ? element : null;
}

var _default = {
  isString: isString,
  isStringRender: isStringRender
};
exports["default"] = _default;