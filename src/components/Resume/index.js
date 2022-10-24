import React from 'react';
import resume from '../../assets/documents/Resume-Brandon-Davis.pdf'
import PDFViewer from 'pdf-viewer-reactjs'

function Resume() {

    return (
        <div>
            <embed src={resume} width='100%' height='800'/>
        </div>
    );
}

export default Resume;