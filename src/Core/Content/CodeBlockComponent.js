import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
// import './CodeBlockComponent.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }) => (
  <NodeViewWrapper className="code-block">
    <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })}>
      <option value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      {extension.options.lowlight.listLanguages().map((lang, index) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
)