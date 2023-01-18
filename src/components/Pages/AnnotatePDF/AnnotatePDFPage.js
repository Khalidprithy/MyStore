import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf1 from '../../../utils/2212.07931.pdf'

const AnnotatePDFPage = () => {
    const [annotations, setAnnotations] = useState([]);
    return (
        <div>
            <Document
                file={pdf1}
                onLoadSuccess={(pdf) => {
                    // you can use the `pdf` object to access the PDF's properties and methods
                }}
                onTextRender={(text) => {
                    // capture the position of the text in the PDF
                    const annotation = {
                        type: 'text',
                        bounds: text.bounds,
                        content: text.text,
                    };
                    setAnnotations([...annotations, annotation]);
                }}
                onRender={(page) => {
                    // capture the position of other elements in the PDF (e.g. images)
                    page.getAnnotations().then((annots) => {
                        setAnnotations([...annotations, ...annots]);
                    });
                }}
            >
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default AnnotatePDFPage;