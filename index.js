import { FormeoEditor, FormeoRenderer } from 'formeo'
const editor = new FormeoEditor({
    editorContainer: '#formeo-editor',
    events: {
        onUpdate: function (data) {
            console.log(editor.formData);
        }
    }
});