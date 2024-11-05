import React, { useState } from 'react';
import { Save, Copy, RefreshCw, Code, Eye } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  subject?: string;
  content: string;
  type: 'email' | 'whatsapp';
  variables: string[];
}

interface TemplateEditorProps {
  template?: Template;
  onSave: (template: Template) => void;
  onClose: () => void;
}

export default function TemplateEditor({ template, onSave, onClose }: TemplateEditorProps) {
  const [currentTemplate, setCurrentTemplate] = useState<Template>(template || {
    id: Date.now().toString(),
    name: '',
    subject: '',
    content: '',
    type: 'email',
    variables: ['hotelName', 'contactName', 'position']
  });
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = () => {
    onSave(currentTemplate);
    onClose();
  };

  const insertVariable = (variable: string) => {
    const textArea = document.getElementById('template-content') as HTMLTextAreaElement;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const content = currentTemplate.content;
    const newContent = content.substring(0, start) + `{{${variable}}}` + content.substring(end);
    setCurrentTemplate({ ...currentTemplate, content: newContent });
  };

  const previewContent = () => {
    let preview = currentTemplate.content;
    currentTemplate.variables.forEach(variable => {
      preview = preview.replace(`{{${variable}}}`, `<span class="text-blue-600">[${variable}]</span>`);
    });
    return preview;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-3/4 max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="space-x-4">
            <input
              type="text"
              placeholder="Template Name"
              className="input-primary"
              value={currentTemplate.name}
              onChange={(e) => setCurrentTemplate({ ...currentTemplate, name: e.target.value })}
            />
            {currentTemplate.type === 'email' && (
              <input
                type="text"
                placeholder="Subject Line"
                className="input-primary w-64"
                value={currentTemplate.subject}
                onChange={(e) => setCurrentTemplate({ ...currentTemplate, subject: e.target.value })}
              />
            )}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`btn-secondary ${previewMode ? 'bg-blue-50' : ''}`}
            >
              {previewMode ? <Code size={16} className="mr-2" /> : <Eye size={16} className="mr-2" />}
              {previewMode ? 'Edit' : 'Preview'}
            </button>
            <button onClick={handleSave} className="btn-primary">
              <Save size={16} className="mr-2" />
              Save Template
            </button>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="w-3/4 p-4">
            {previewMode ? (
              <div 
                className="prose max-w-none h-full p-4 bg-gray-50 rounded-lg"
                dangerouslySetInnerHTML={{ __html: previewContent() }}
              />
            ) : (
              <textarea
                id="template-content"
                className="w-full h-full p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
                value={currentTemplate.content}
                onChange={(e) => setCurrentTemplate({ ...currentTemplate, content: e.target.value })}
                placeholder="Write your template content here..."
              />
            )}
          </div>

          <div className="w-1/4 border-l p-4">
            <h3 className="font-medium mb-4">Variables</h3>
            <div className="space-y-2">
              {currentTemplate.variables.map(variable => (
                <button
                  key={variable}
                  onClick={() => insertVariable(variable)}
                  className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 focus:bg-gray-50"
                >
                  {`{{${variable}}}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}