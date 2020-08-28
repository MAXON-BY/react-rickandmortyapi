import React from 'react';

const DocsPage = () => {
  return (
    <div className="page docs-page">
      <section>
        <div className="container">
          <p>
            Docs link
            <a
              href="https://rickandmortyapi.com/documentation"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              https://rickandmortyapi.com/documentation
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
