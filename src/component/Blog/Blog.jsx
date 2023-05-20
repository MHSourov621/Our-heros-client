import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-28 px-20'>
            <div className="mb-20 text-center">
                <h1 className='text-6xl text-orange-500 border-b-2 border-orange-400 inline'>Question & Answer</h1>
            </div>
            <div>
                <h2 className='text-3xl font-semibold text-orange-400 mb-4'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-xl mb-5'><span className='text-2xl text-orange-500'>Ans: </span>
                    Access token: Credential for accessing protected resources.
                    Refresh token: Long-lived token for obtaining a new access token.
                    Storage on client-side: Access tokens in short-lived memory/storage, refresh tokens in secure HTTP-only cookies.
                    Approach may vary: Depending on authentication system and security requirements.</p>

                <h2 className='text-3xl font-semibold text-orange-400 mb-4'>2. Compare SQL and NoSQL databases?</h2>
                <p className='text-xl mb-5'><span className='text-2xl text-orange-500'>Ans: </span> SQL databases are relational and structured with fixed schemas, while NoSQL databases are flexible, non-relational, and suited for unstructured data and dynamic environments.</p>

                <h2 className='text-3xl font-semibold text-orange-400 mb-4'>3. What is express js? What is Nest JS?</h2>
                <p className='text-xl mb-5'><span className='text-2xl text-orange-500'>Ans: </span> Express.js is a minimalist web framework for Node.js, while NestJS is a TypeScript framework built on top of Express.js with enhanced features. </p>

                <h2 className='text-3xl font-semibold text-orange-400 mb-4'>4. What is MongoDB aggregate and how does it work?</h2>
                <p className='text-xl mb-5'><span className='text-2xl text-orange-500'>Ans: </span>
                    MongoDB aggregate is a powerful feature that allows data processing and analysis within MongoDB. It utilizes a pipeline framework where multiple stages are chained together to transform and manipulate data. Aggregation operations can perform tasks like filtering, grouping, sorting, joining, and calculating aggregations based on specified criteria.</p>
            </div>
        </div>
    );
};

export default Blog;