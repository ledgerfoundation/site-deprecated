"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _createHtmlElement = _interopRequireDefault(require("create-html-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id) {
  var rootContainer = (0, _createHtmlElement.default)({
    name: 'div'
  });
  rootContainer.setAttribute('id', id);
  return rootContainer;
}
/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */


function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */


function usePortal(id) {
  var rootElemRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function setupElement() {
    // Look for existing target dom element to append to
    var existingParent = document.querySelector("#".concat(id)); // Parent is either a new root or the existing dom element

    var parentElem = existingParent || createRootElement(id); // If there is no existing DOM element, add a new one.

    if (!existingParent) {
      addRootElement(parentElem);
    } // Add the detached element to the parent


    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);
  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = (0, _createHtmlElement.default)({
        name: 'div'
      });
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

var _default = usePortal;
exports.default = _default;