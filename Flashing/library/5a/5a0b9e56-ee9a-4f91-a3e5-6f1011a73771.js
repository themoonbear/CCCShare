"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, LineComponent, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, up, Lightning;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      LineComponent = _cc.LineComponent;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "5a0b95W7ppPkaPlbxARpzdx", "Lightning"); // begin Lightning


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      up = new Vec3(0, 1, 0);

      _export("Lightning", Lightning = (_dec = ccclass("Lightning"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Lightning, _Component);

        function Lightning() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, Lightning);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Lightning)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "detail", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "displacement", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "yOffset", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "startNode", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "targetNode", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this.line = null;
          return _this;
        }

        babelHelpers.createClass(Lightning, [{
          key: "onLoad",
          value: function onLoad() {
            this.line = this.getComponent(LineComponent);
            this.points = [];
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            var startPos = Vec3.ZERO;
            var endPos = Vec3.ZERO;
            var offset = up.multiplyScalar(this.yOffset);

            if (this.startNode) {
              startPos = this.startNode.position.add(offset);
            }

            if (this.targetNode) {
              endPos = this.targetNode.position.add(offset);
            }

            if (!startPos.equals(endPos)) {
              this.points.length = 0;
              this.collectLinPos(startPos, endPos, this.displacement);
              this.points.push(endPos);
              this.line.positions = this.points;
            }
          }
        }, {
          key: "collectLinPos",
          value: function collectLinPos(startPos, destPos, displace) {
            if (displace < this.detail) {
              this.points.push(startPos);
            } else {
              var midX = (startPos.x + destPos.x) / 2;
              var midY = (startPos.y + destPos.y) / 2;
              var midZ = (startPos.z + destPos.z) / 2;
              midX += (Math.random() - 0.5) * displace;
              midY += (Math.random() - 0.5) * displace;
              midZ += (Math.random() - 0.5) * displace;
              var midPos = new Vec3(midX, midY, midZ);
              this.collectLinPos(startPos, midPos, displace / 2);
              this.collectLinPos(midPos, destPos, displace / 2);
            }
          }
        }]);
        return Lightning;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "detail", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "displacement", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 15;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "yOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end Lightning

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL0xpZ2h0bmluZy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkxpbmVDb21wb25lbnQiLCJWZWMzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwidXAiLCJMaWdodG5pbmciLCJsaW5lIiwiZ2V0Q29tcG9uZW50IiwicG9pbnRzIiwiZGVsdGFUaW1lIiwic3RhcnRQb3MiLCJaRVJPIiwiZW5kUG9zIiwib2Zmc2V0IiwibXVsdGlwbHlTY2FsYXIiLCJ5T2Zmc2V0Iiwic3RhcnROb2RlIiwicG9zaXRpb24iLCJhZGQiLCJ0YXJnZXROb2RlIiwiZXF1YWxzIiwibGVuZ3RoIiwiY29sbGVjdExpblBvcyIsImRpc3BsYWNlbWVudCIsInB1c2giLCJwb3NpdGlvbnMiLCJkZXN0UG9zIiwiZGlzcGxhY2UiLCJkZXRhaWwiLCJtaWRYIiwieCIsIm1pZFkiLCJ5IiwibWlkWiIsInoiLCJNYXRoIiwicmFuZG9tIiwibWlkUG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxhLE9BQUFBLGE7QUFBZUMsTUFBQUEsSSxPQUFBQSxJOzs7Z0ZBRW9COzs7QUFEakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7QUFFWEMsTUFBQUEsRSxHQUFVLElBQUlILElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQzs7MkJBR0hJLFMsV0FEWkgsT0FBTyxDQUFDLFdBQUQsQyxVQVVIQyxRQUFRLENBQUNKLElBQUQsQyxVQUdSSSxRQUFRLENBQUNKLElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHVE8sSSxHQUFzQixJOzs7Ozs7bUNBR2I7QUFDTCxpQkFBS0EsSUFBTCxHQUFZLEtBQUtDLFlBQUwsQ0FBa0JQLGFBQWxCLENBQVo7QUFDQSxpQkFBS1EsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7O2lDQUVPQyxTLEVBQW1CO0FBQ3ZCLGdCQUFJQyxRQUFjLEdBQUdULElBQUksQ0FBQ1UsSUFBMUI7QUFDQSxnQkFBSUMsTUFBWSxHQUFHWCxJQUFJLENBQUNVLElBQXhCO0FBQ0EsZ0JBQUlFLE1BQVksR0FBR1QsRUFBRSxDQUFDVSxjQUFILENBQWtCLEtBQUtDLE9BQXZCLENBQW5COztBQUVBLGdCQUFJLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEJOLGNBQUFBLFFBQVEsR0FBRyxLQUFLTSxTQUFMLENBQWVDLFFBQWYsQ0FBd0JDLEdBQXhCLENBQTRCTCxNQUE1QixDQUFYO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS00sVUFBVCxFQUFxQjtBQUNqQlAsY0FBQUEsTUFBTSxHQUFHLEtBQUtPLFVBQUwsQ0FBZ0JGLFFBQWhCLENBQXlCQyxHQUF6QixDQUE2QkwsTUFBN0IsQ0FBVDtBQUNIOztBQUVELGdCQUFJLENBQUNILFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQlIsTUFBaEIsQ0FBTCxFQUE4QjtBQUMxQixtQkFBS0osTUFBTCxDQUFZYSxNQUFaLEdBQXFCLENBQXJCO0FBQ0EsbUJBQUtDLGFBQUwsQ0FBbUJaLFFBQW5CLEVBQTZCRSxNQUE3QixFQUFxQyxLQUFLVyxZQUExQztBQUNBLG1CQUFLZixNQUFMLENBQVlnQixJQUFaLENBQWlCWixNQUFqQjtBQUNBLG1CQUFLTixJQUFMLENBQVVtQixTQUFWLEdBQXNCLEtBQUtqQixNQUEzQjtBQUNIO0FBQ0o7Ozt3Q0FFYUUsUSxFQUFnQmdCLE8sRUFBZUMsUSxFQUFrQjtBQUMzRCxnQkFBSUEsUUFBUSxHQUFHLEtBQUtDLE1BQXBCLEVBQTRCO0FBQ3hCLG1CQUFLcEIsTUFBTCxDQUFZZ0IsSUFBWixDQUFpQmQsUUFBakI7QUFDSCxhQUZELE1BRU87QUFDSCxrQkFBSW1CLElBQVksR0FBRyxDQUFDbkIsUUFBUSxDQUFDb0IsQ0FBVCxHQUFhSixPQUFPLENBQUNJLENBQXRCLElBQTJCLENBQTlDO0FBQ0Esa0JBQUlDLElBQVksR0FBRyxDQUFDckIsUUFBUSxDQUFDc0IsQ0FBVCxHQUFhTixPQUFPLENBQUNNLENBQXRCLElBQTJCLENBQTlDO0FBQ0Esa0JBQUlDLElBQVksR0FBRyxDQUFDdkIsUUFBUSxDQUFDd0IsQ0FBVCxHQUFhUixPQUFPLENBQUNRLENBQXRCLElBQTJCLENBQTlDO0FBRUFMLGNBQUFBLElBQUksSUFBSSxDQUFDTSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0JULFFBQWhDO0FBQ0FJLGNBQUFBLElBQUksSUFBSSxDQUFDSSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0JULFFBQWhDO0FBQ0FNLGNBQUFBLElBQUksSUFBSSxDQUFDRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0JULFFBQWhDO0FBRUEsa0JBQUlVLE1BQVcsR0FBRyxJQUFJcEMsSUFBSixDQUFTNEIsSUFBVCxFQUFlRSxJQUFmLEVBQXFCRSxJQUFyQixDQUFsQjtBQUNBLG1CQUFLWCxhQUFMLENBQW1CWixRQUFuQixFQUE2QjJCLE1BQTdCLEVBQXFDVixRQUFRLEdBQUMsQ0FBOUM7QUFDQSxtQkFBS0wsYUFBTCxDQUFtQmUsTUFBbkIsRUFBMkJYLE9BQTNCLEVBQW9DQyxRQUFRLEdBQUUsQ0FBOUM7QUFDSDtBQUNKOzs7UUE1RDBCN0IsUyw4RkFFMUJLLFE7Ozs7O2lCQUNnQixDOzttR0FDaEJBLFE7Ozs7O2lCQUNzQixFOzs4RkFDdEJBLFE7Ozs7O2lCQUNpQixDOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0MsSTs7OztvQkFqQkwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExpbmVDb21wb25lbnQsIFZlYzMgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHVwOlZlYzMgPSBuZXcgVmVjMygwLCAxLCAwKTtcblxuQGNjY2xhc3MoXCJMaWdodG5pbmdcIilcbmV4cG9ydCBjbGFzcyBMaWdodG5pbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgZGV0YWlsOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eVxuICAgIGRpc3BsYWNlbWVudDogbnVtYmVyID0gMTU7XG4gICAgQHByb3BlcnR5XG4gICAgeU9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIHN0YXJ0Tm9kZTogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcblxuICAgIGxpbmU6IExpbmVDb21wb25lbnQgPSBudWxsO1xuICAgIHBvaW50czogVmVjM1tdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLmdldENvbXBvbmVudChMaW5lQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzdGFydFBvczogVmVjMyA9IFZlYzMuWkVSTztcbiAgICAgICAgbGV0IGVuZFBvczogVmVjMyA9IFZlYzMuWkVSTztcbiAgICAgICAgbGV0IG9mZnNldDogVmVjMyA9IHVwLm11bHRpcGx5U2NhbGFyKHRoaXMueU9mZnNldCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnROb2RlKSB7XG4gICAgICAgICAgICBzdGFydFBvcyA9IHRoaXMuc3RhcnROb2RlLnBvc2l0aW9uLmFkZChvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgZW5kUG9zID0gdGhpcy50YXJnZXROb2RlLnBvc2l0aW9uLmFkZChvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGFydFBvcy5lcXVhbHMoZW5kUG9zKSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdExpblBvcyhzdGFydFBvcywgZW5kUG9zLCB0aGlzLmRpc3BsYWNlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKGVuZFBvcyk7XG4gICAgICAgICAgICB0aGlzLmxpbmUucG9zaXRpb25zID0gdGhpcy5wb2ludHMgYXMgbmV2ZXJbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3RMaW5Qb3Moc3RhcnRQb3M6IFZlYzMsIGRlc3RQb3M6IFZlYzMsIGRpc3BsYWNlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRpc3BsYWNlIDwgdGhpcy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2goc3RhcnRQb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1pZFg6IG51bWJlciA9IChzdGFydFBvcy54ICsgZGVzdFBvcy54KSAvIDI7XG4gICAgICAgICAgICBsZXQgbWlkWTogbnVtYmVyID0gKHN0YXJ0UG9zLnkgKyBkZXN0UG9zLnkpIC8gMjtcbiAgICAgICAgICAgIGxldCBtaWRaOiBudW1iZXIgPSAoc3RhcnRQb3MueiArIGRlc3RQb3MueikgLyAyO1xuXG4gICAgICAgICAgICBtaWRYICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIGRpc3BsYWNlO1xuICAgICAgICAgICAgbWlkWSArPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBkaXNwbGFjZTtcbiAgICAgICAgICAgIG1pZFogKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogZGlzcGxhY2U7XG5cbiAgICAgICAgICAgIGxldCBtaWRQb3M6VmVjMyA9IG5ldyBWZWMzKG1pZFgsIG1pZFksIG1pZFopO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0TGluUG9zKHN0YXJ0UG9zLCBtaWRQb3MsIGRpc3BsYWNlLzIpO1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0TGluUG9zKG1pZFBvcywgZGVzdFBvcywgZGlzcGxhY2UgLzIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19