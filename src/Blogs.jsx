
const Blogs = () => {
    return (
        <div className="bg-slate-400 p-5">
            <div className="flex justify-start my-3">
                <label htmlFor="my-modal" className="btn bg-primary">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <p className="py-4">An access token is a credential that grants a user access to specific resources or services, while a refresh token allows obtaining a new access token without reauthentication. The access token contains user information and permissions and is stored in memory or short-lived storage. The refresh token, more sensitive, should be securely stored in long-lived storage like local storage or encrypted databases. When the access token expires, the refresh token is used to request a new access token from the server. Storing tokens securely is crucial, and following best practices and consulting experts ensures their proper implementation and protection.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start my-3">
                <label htmlFor="my-modal" className="btn bg-primary">2. Compare SQL and NoSQL databases?</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Compare SQL and NoSQL databases?</h3>
                        <p className="py-4">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two distinct types of database management systems. SQL databases are based on the relational model and use tables with predefined schemas to organize data. They enforce strict data consistency and integrity rules, allowing complex querying and data relationships through primary and foreign keys. SQL databases are suitable for applications requiring structured data, ACID (Atomicity, Consistency, Isolation, Durability) compliance, and complex querying capabilities. On the other hand, NoSQL databases use a variety of data models such as key-value, document, columnar, or graph-based structures. They offer flexibility in handling unstructured and semi-structured data, scalability, and high performance, making them ideal for applications with large volumes of rapidly changing data, horizontal scalability, and flexible data models. Choosing between SQL and NoSQL depends on the specific requirements and nature of the application.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start my-3">
                <label htmlFor="my-modal" className="btn bg-primary">3. What is express js and What is Nest JS?</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">What is express js and What is Nest JS?</h3>
                        <p className="py-4">Express.js is a minimalist and flexible web application framework for Node.js. It offers a simple and unopinionated approach to developing web applications and APIs. With Express.js, developers can easily handle HTTP requests and responses, and it provides middleware for routing and other common web application functionalities. On the other hand, NestJS is a progressive framework built on top of Express.js that brings structure and opinionation to server-side application development. It uses TypeScript, decorators, and modules to create scalable and maintainable applications, following design patterns like MVC. Express.js is known for its simplicity and flexibility, while NestJS provides a more structured and opinionated approach for building enterprise-level applications. The choice between Express.js and NestJS depends on the project's requirements, with Express.js being suitable for simpler applications and NestJS offering a more robust framework for larger-scale projects.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start my-3">
                <label htmlFor="my-modal" className="btn bg-primary">4. What is MongoDB aggregate and how does it work?</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">What is MongoDB aggregate and how does it work?</h3>
                        <p className="py-4">MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis within the database. It enables the aggregation framework, which supports complex operations like grouping, filtering, sorting, and transforming data. The aggregate method takes an array of pipeline stages as input, where each stage represents a specific operation. These stages can include $match to filter documents, $group to group and summarize data, $sort to sort the results, and many more. The aggregate framework operates on the entire collection or a subset of documents and processes them in a pipeline fashion, passing the results of one stage to the next. It provides a flexible and efficient way to perform calculations, generate reports, and extract meaningful insights from data stored in MongoDB. Developers can leverage the power of the aggregate feature to perform advanced data manipulations and analysis directly within the database, reducing the need for additional processing on the application side.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;