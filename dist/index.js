'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var isArray = require('lodash/isArray');
var find = require('lodash/find');
var antd = require('antd');
var memoize = require('lodash/memoize');
var has = require('lodash/has');
var pick = require('lodash/pick');
var capitalize = require('lodash/capitalize');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var isArray__default = /*#__PURE__*/_interopDefaultLegacy(isArray);
var find__default = /*#__PURE__*/_interopDefaultLegacy(find);
var memoize__default = /*#__PURE__*/_interopDefaultLegacy(memoize);
var has__default = /*#__PURE__*/_interopDefaultLegacy(has);
var pick__default = /*#__PURE__*/_interopDefaultLegacy(pick);
var capitalize__default = /*#__PURE__*/_interopDefaultLegacy(capitalize);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/* eslint react/self-closing-comp: 0 */

var QuestionIcon = function QuestionIcon() {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 1024 1024",
    className: "antd-form-builder-question-icon"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
  }));
};

var FormItem = antd.Form.Item;
var isV4 = !!antd.Form.useForm;

var getValue = function getValue(obj, namePath) {
  var arr = typeof namePath === 'string' ? namePath.split('.') : namePath;
  var current = obj;

  for (var i = 0; i < arr.length; i += 1) {
    if (has__default["default"](current, arr[i])) {
      current = current[arr[i]];
    } else {
      return undefined;
    }
  }

  return current;
};

var getWrappedComponentWithForwardRef = memoize__default["default"](function (Comp) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/display-name
    React.forwardRef(function (props, ref) {
      return /*#__PURE__*/React__default["default"].createElement("span", {
        ref: ref
      }, /*#__PURE__*/React__default["default"].createElement(Comp, props));
    })
  );
});

function FormBuilderField(props) {
  var field = props.field,
      meta = props.meta,
      form = props.form;
  var label = field.tooltip ? /*#__PURE__*/React__default["default"].createElement("span", null, field.label, /*#__PURE__*/React__default["default"].createElement(antd.Tooltip, {
    title: field.tooltip
  }, ' ', /*#__PURE__*/React__default["default"].createElement(QuestionIcon, null))) : field.label;
  var formItemLayout = field.formItemLayout || (field.label ? getValue(meta, 'formItemLayout') || [8, 16] : null);

  if (isArray__default["default"](formItemLayout) && formItemLayout.length >= 2) {
    formItemLayout = {
      labelCol: {
        span: formItemLayout[0]
      },
      wrapperCol: {
        span: formItemLayout[1]
      }
    };
  }

  var isFieldViewMode = meta.viewMode || field.viewMode || field.readOnly;

  var formItemProps = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    key: field.key,
    colon: meta.colon
  }, meta.formItemLayout !== null ? formItemLayout : {}), {}, {
    label: label
  }, pick__default["default"](field, ['help', 'extra', 'labelCol', 'wrapperCol', 'colon', 'htmlFor', 'noStyle', 'validateStatus', 'hasFeedback'])), field.formItemProps), {}, {
    className: "".concat(meta.viewMode ? 'ant-form-item-view-mode' + (isV4 ? ' ant-form-item-view-mode-v4' : '') : '', " ").concat(field.className || field.formItemProps && field.formItemProps.className)
  });

  if (isV4) {
    if (field.key || field.name) {
      formItemProps.name = field.name || field.key.split('.');
    }

    Object.assign(formItemProps, _objectSpread2({
      noStyle: field.noFormItem || field.noStyle
    }, pick__default["default"](field, ['shouldUpdate', 'dependencies'])));
  }

  if (field.label && typeof field.label === 'string') {
    formItemProps['data-label'] = field.label; // help e2e test
  }

  if (field.colSpan && formItemProps.labelCol && !field.formItemLayout) {
    var labelCol = Math.round(formItemProps.labelCol.span / field.colSpan);
    Object.assign(formItemProps, {
      labelCol: {
        span: labelCol
      },
      wrapperCol: {
        span: 24 - labelCol
      }
    });
  }

  if (field.render) {
    return field.render.call(this, _objectSpread2({
      formItemProps: formItemProps,
      field: field,
      form: form
    }, pick__default["default"](props, ['disabled', 'viewMode', 'initialValues'])));
  }

  var initialValue;
  var initialValues = meta.initialValues || {};

  if (has__default["default"](field, 'initialValue')) {
    initialValue = field.initialValue;
  } else if (field.getInitialValue) {
    initialValue = field.getInitialValue(field, initialValues, form);
  } else {
    initialValue = getValue(initialValues, field.name || field.key);
  } // Handle field props


  var rules = _toConsumableArray(field.rules || []);

  if (field.required) {
    rules.unshift({
      required: true,
      message: field.message || field.requiredMessage || undefined
    });
  }

  var fieldProps = _objectSpread2(_objectSpread2({
    initialValue: initialValue,
    preserve: meta.preserve
  }, pick__default["default"](field, ['getValueFromEvent', 'getValueProps', 'normalize', 'trigger', 'preserve', 'valuePropName', 'validateTrigger', 'validateFirst'])), {}, {
    rules: rules
  }, field.fieldProps);

  if (isV4) {
    Object.assign(formItemProps, fieldProps);
  }

  if (isFieldViewMode) {
    var viewEle = null;
    var formValues = form ? isV4 ? form.getFieldsValue(true) : form.getFieldsValue() : {};
    var viewValue = has__default["default"](formValues, field.key || field.name.join('.')) ? getValue(formValues, formItemProps.name || field.key) : initialValue;

    if (field.renderView) {
      viewEle = field.renderView(viewValue, form, initialValues);
    } else if (field.viewWidget) {
      var ViewWidget = field.viewWidget;
      viewEle = /*#__PURE__*/React__default["default"].createElement(ViewWidget, _extends({
        value: viewValue,
        form: form,
        field: field
      }, field.viewWidgetProps));
    } else if (field.link) {
      var href = typeof field.link === 'string' ? field.link : viewValue;
      viewEle = /*#__PURE__*/React__default["default"].createElement("a", {
        href: href,
        target: field.linkTarget || '_self'
      }, viewValue);
    } else if (field.options) {
      // a little hacky here, if a field is select/options like, auto use label for value
      var found = find__default["default"](field.options, function (opt) {
        return opt[0] === viewValue;
      });

      if (found) {
        viewValue = found[1];
      }
    }

    if (!viewEle) {
      if (typeof viewValue === 'boolean') viewEle = capitalize__default["default"](String(viewValue));else if (viewValue === undefined) viewEle = 'N/A';else {
        viewEle = /*#__PURE__*/React__default["default"].createElement("span", {
          className: "antd-form-builder-string-content"
        }, String(viewValue) || '');
      }
    } // TODO: readOnly seems to be the same with viewMode in antd v4


    if (form && field.readOnly) {
      var _ele = /*#__PURE__*/React__default["default"].createElement("span", {
        className: "antd-form-builder-read-only-content"
      }, viewEle);

      return /*#__PURE__*/React__default["default"].createElement(FormItem, formItemProps, isV4 ? _ele : form.getFieldDecorator(field.id || field.key, fieldProps)(_ele));
    }

    delete formItemProps.name;
    delete formItemProps.key;
    return /*#__PURE__*/React__default["default"].createElement(FormItem, formItemProps, viewEle);
  } // Handle widget props


  var wp = field.widgetProps || {};

  var widgetProps = _objectSpread2(_objectSpread2({}, pick__default["default"](field, ['placeholder', 'type', 'className', 'class', 'onChange'])), {}, {
    disabled: field.disabled || meta.disabled || props.disabled
  }, wp);

  var FieldWidget = field.widget || antd.Input;

  if (field.forwardRef) {
    FieldWidget = getWrappedComponentWithForwardRef(FieldWidget);
  }

  var valueProps = {};
  var ele = /*#__PURE__*/React__default["default"].createElement(FieldWidget, _extends({}, widgetProps, valueProps), field.children || null);
  var ele2 = isV4 ? ele : form.getFieldDecorator(field.id || field.key, fieldProps)(ele);

  if (isV4) {
    // antd v4 always has form item
    return /*#__PURE__*/React__default["default"].createElement(FormItem, formItemProps, ele);
  }

  return field.noFormItem || field.noStyle ? ele2 : /*#__PURE__*/React__default["default"].createElement(FormItem, formItemProps, ele2);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ant-form-item.ant-form-item-view-mode {\n  margin-bottom: 20px;\n}\n.ant-form-item.ant-form-item-view-mode-v4 {\n  margin-bottom: 5px;\n}\n\n.ant-form-item-view-mode .ant-form-item-label {\n  text-align: left;\n  font-weight: bold;\n  line-height: 1.5;\n}\n\n.ant-form-item-view-mode .ant-form-item-control {\n  line-height: 1.5;\n}\n\n.ant-form-item-children .antd-form-builder-string-content {\n  line-height: 1.5;\n  display: inline-block;\n  padding-top: 9px;\n}\n\n.ant-form-item-view-mode .antd-form-builder-string-content {\n  display: inline;\n  padding-top: 0;\n}\n\n.antd-form-builder-question-icon {\n  fill: #40a9ff;\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n}";
styleInject(css_248z);

var widgetMap = {};

function getWidget(widget) {
  if (!widget) return null;

  if (typeof widget === 'string') {
    if (!widgetMap[widget] || !widgetMap[widget].widget) {
      throw new Error("Widget '".concat(widget, "' not found, did you defined it by FormBuilder.defineComponent?"));
    }

    return widgetMap[widget].widget;
  }

  return widget;
}

function normalizeMeta(meta) {
  var fields = isArray__default["default"](meta) ? meta : meta.fields || meta.elements;
  if (!fields) fields = [meta];
  fields = fields.map(function (field) {
    var widget = getWidget(field.widget);
    var viewWidget = getWidget(field.viewWidget);
    var dynamic = field.dynamic !== false; // Find metaConvertor

    var item = find__default["default"](Object.values(widgetMap), function (entry) {
      return (entry.widget === widget || entry.widget === viewWidget) && entry.metaConvertor;
    });

    if (item) {
      var newField = item.metaConvertor(field);

      if (!newField) {
        throw new Error("metaConvertor of '".concat(String(field.widget), "' must return a field"));
      }

      return _objectSpread2(_objectSpread2({}, newField), {}, {
        viewWidget: viewWidget,
        widget: widget,
        dynamic: dynamic
      });
    }

    return _objectSpread2(_objectSpread2({}, field), {}, {
      widget: widget,
      viewWidget: viewWidget,
      dynamic: dynamic
    });
  });

  if (isArray__default["default"](meta) || !meta.fields && !meta.elements) {
    return {
      fields: fields
    };
  }

  return _objectSpread2(_objectSpread2({}, meta), {}, {
    fields: fields
  });
}

function FormBuilder(props) {
  var getMeta = props.getMeta,
      form = props.form;
  var meta = getMeta ? getMeta(form, props) : props.meta;
  return /*#__PURE__*/React__default["default"].createElement(FormBuilderInner, _extends({}, props, {
    form: form ? form.current || form : null,
    meta: meta
  })); // return (
  //   <Form.Item shouldUpdate noStyle>
  //     {() => {
  //       return <FormBuilderInner {...props} form={form ? form.current || form : null} meta={meta} />
  //     }}
  //   </Form.Item>
  // )
}

function FormBuilderInner(props) {
  var meta = props.meta,
      viewMode = props.viewMode,
      initialValues = props.initialValues,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$form = props.form,
      form = _props$form === void 0 ? null : _props$form;
  if (!meta) return null;
  var newMeta = normalizeMeta(meta);
  newMeta.viewMode = newMeta.viewMode || viewMode;
  newMeta.initialValues = newMeta.initialValues || initialValues;
  var fields = newMeta.fields,
      _newMeta$columns = newMeta.columns,
      columns = _newMeta$columns === void 0 ? 1 : _newMeta$columns,
      _newMeta$gutter = newMeta.gutter,
      gutter = _newMeta$gutter === void 0 ? 10 : _newMeta$gutter;
  var elements = fields.map(function (field) {
    return /*#__PURE__*/React__default["default"].createElement(FormBuilderField, {
      key: field.key,
      field: field,
      disabled: disabled,
      meta: newMeta,
      form: form
    });
  });

  if (columns === 1) {
    return elements;
  }

  var rows = []; // for each column , how many grid cols

  var spanUnit = 24 / columns; // eslint-disable-next-line

  for (var i = 0; i < elements.length;) {
    var cols = [];

    for (var j = 0; (j < columns || j === 0) && // total col span is less than columns
    i < elements.length && ( // element exist
    !['left', 'both'].includes(fields[i].clear) || j === 0);) {
      var fieldSpan = fields[i].colSpan || 1;
      cols.push( /*#__PURE__*/React__default["default"].createElement(antd.Col, {
        key: j,
        span: Math.min(24, spanUnit * fieldSpan)
      }, elements[i]));
      j += fieldSpan;

      if (['both', 'right'].includes(fields[i].clear)) {
        i += 1;
        break;
      }

      i += 1;
    }

    rows.push( /*#__PURE__*/React__default["default"].createElement(antd.Row, {
      key: i,
      gutter: gutter
    }, cols));
  }

  return rows;
}

FormBuilder.defineWidget = function (name, widget) {
  var metaConvertor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (widgetMap[name]) throw new Error("Widget \"".concat(name, "\" already defined."));
  widgetMap[name] = {
    widget: widget,
    metaConvertor: metaConvertor
  };
};

FormBuilder.useForceUpdate = function () {
  var _React$useState = React__default["default"].useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updateState = _React$useState2[1];

  var forceUpdate = React__default["default"].useCallback(function () {
    return updateState({});
  }, []);
  return forceUpdate;
};

FormBuilder.useForm = function (f) {
  throw new Error('FormBuilder.useForm is removed. Please use Form.useForm().');
};

FormBuilder.createForm = function (ctx) {
  throw new Error('FormBuilder.createForm is removed. Please use Form.useForm for functional component and ref for class component.');
};

FormBuilder.propTypes = {
  meta: PropTypes__default["default"].any
};

var mapOptions = function mapOptions(options) {
  if (!___default["default"].isArray(options)) {
    throw new Error('Options should be array in form builder meta.');
  }

  return options.map(function (opt) {
    if (___default["default"].isArray(opt)) {
      return {
        value: opt[0],
        label: opt[1]
      };
    } else if (___default["default"].isPlainObject(opt)) {
      return opt;
    } else {
      return {
        value: opt,
        label: opt
      };
    }
  });
};

FormBuilder.defineWidget('checkbox', antd.Checkbox, function (field) {
  return _objectSpread2(_objectSpread2({}, field), {}, {
    valuePropName: 'checked'
  });
});
FormBuilder.defineWidget('switch', antd.Switch, function (field) {
  return _objectSpread2(_objectSpread2({}, field), {}, {
    valuePropName: 'checked'
  });
});
FormBuilder.defineWidget('button', antd.Button);
FormBuilder.defineWidget('input', antd.Input);
FormBuilder.defineWidget('password', antd.Input.Password);
FormBuilder.defineWidget('textarea', antd.Input.TextArea);
FormBuilder.defineWidget('number', antd.InputNumber);
FormBuilder.defineWidget('date-picker', antd.DatePicker);
FormBuilder.defineWidget('radio', antd.Radio);
FormBuilder.defineWidget('radio-group', antd.Radio.Group, function (field) {
  var RadioComp = field.buttonGroup ? antd.Radio.Button : antd.Radio;

  if (field.options && !field.children) {
    return _objectSpread2(_objectSpread2({}, field), {}, {
      widgetProps: _objectSpread2(_objectSpread2({}, field.widgetProps), {}, {
        name: field.key
      }),
      children: mapOptions(field.options).map(function (opt) {
        return /*#__PURE__*/React__default["default"].createElement(RadioComp, {
          value: opt.value,
          key: opt.value
        }, opt.label);
      })
    });
  }

  return field;
});
FormBuilder.defineWidget('checkbox-group', antd.Checkbox.Group, function (field) {
  if (field.options && !field.children) {
    return _objectSpread2(_objectSpread2({}, field), {}, {
      children: mapOptions(field.options).map(function (opt) {
        return /*#__PURE__*/React__default["default"].createElement(antd.Checkbox, {
          value: opt.value,
          key: opt.value
        }, opt.label);
      })
    });
  }

  return field;
});
FormBuilder.defineWidget('select', antd.Select, function (field) {
  if (field.options && !field.children) {
    return _objectSpread2(_objectSpread2({}, field), {}, {
      children: mapOptions(field.options).map(function (opt) {
        return /*#__PURE__*/React__default["default"].createElement(antd.Select.Option, {
          label: opt.label,
          value: opt.value,
          key: opt.value,
          disabled: opt.disabled
        }, opt.children || opt.label);
      })
    });
  }

  return field;
});

// export default FormBuilder from './FormBuilder'

module.exports = FormBuilder;
//# sourceMappingURL=index.js.map
