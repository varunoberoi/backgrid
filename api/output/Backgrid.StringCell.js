Ext.data.JsonP.Backgrid_StringCell({
  "tagname": "class",
  "name": "Backgrid.StringCell",
  "extends": "Backgrid.Cell",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
  },
  "private": null,
  "id": "class-Backgrid.StringCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.StringCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-editor"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "formatter",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-formatter"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "enterEditMode",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderError",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-renderError"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 321,
  "files": [
    {
      "filename": "cell.js",
      "href": null
    }
  ],
  "html_meta": {
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "component": false,
  "superclasses": [
    "Backbone.View",
    "Backgrid.Cell"
  ],
  "subclasses": [
    "Backgrid.EmailCell",
    "Backgrid.Extension.TextCell"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='docClass'>Backgrid.Cell</a><div class='subclass '><strong>Backgrid.StringCell</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.EmailCell' rel='Backgrid.EmailCell' class='docClass'>Backgrid.EmailCell</a></div><div class='dependency'><a href='#!/api/Backgrid.Extension.TextCell' rel='Backgrid.Extension.TextCell' class='docClass'>Backgrid.Extension.TextCell</a></div></pre><div class='doc-contents'><p>StringCell displays HTML escaped strings and accepts anything typed in.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.StringCell'>Backgrid.StringCell</span><br/></div><a href='#!/api/Backgrid.StringCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;string-cell&quot;</code></p></div></div></div><div id='property-editor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-editor' class='name expandable'>editor</a><span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span></div><div class='description'><div class='short'>The\ndefault editor for all cell instances of this class. ...</div><div class='long'><p>The\ndefault editor for all cell instances of this class. This value must be a\nclass, it will be automatically instantiated upon entering edit mode.</p>\n\n<p>See <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></p>\n<p>Defaults to: <code>Backgrid.InputCellEditor</code></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-formatter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-formatter' class='name expandable'>formatter</a><span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a>|Object|string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>new CellFormatter()</code></p></div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters and listens on the...</div><div class='long'><p>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters and listens on the editor's <code>backgrid:done</code> and\n<code>backgrid:error</code> events. When the editor is <code>done</code>, edit mode is\nexited. When the editor triggers an <code>backgrid:error</code> event, it means the\neditor is unable to convert the current user input to an apprpriate value\nfor the model's column. An <code>editor</code> CSS class is added to the cell upon\nentering edit mode.</p>\n\n<p>This method triggers a Backbone <code>backgrid:edit</code> event when the cell is\nentering edit mode and an editor instance has been constructed, but before\nit is rendered and inserted into the DOM. The cell and the constructed cell\neditor instance are sent as event parameters when this event is triggered.</p>\n\n<p>When this cell has finished switching to edit mode, a Backbone\n<code>backgrid:editing</code> event is triggered. The cell and the constructed cell\ninstance are also sent as parameters in the event.</p>\n</div></div></div><div id='method-exitEditMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes the editor and re-render in display mode. ...</div><div class='long'><p>Removes the editor and re-render in display mode.</p>\n</div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>ReferenceError</span><div class='sub-desc'><p>If formatter is a string but a formatter class of\nsaid name cannot be found in the Backgrid module.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render a text string in a table cell. ...</div><div class='long'><p>Render a text string in a table cell. The text is converted from the\nmodel's raw value for this cell's column.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n</div></div></div></div></div></div></div>"
});