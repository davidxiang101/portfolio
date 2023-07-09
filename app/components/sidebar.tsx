import React from 'react';

const SideBar: React.FC = () => {
    return (
        <div className="sticky top-0 w-3/5 h-screen p-4 overflow-auto">
            <h2 className="mb-4 text-lg font-bold">Contact Information</h2>
            {/* Replace with your own information */}
            <p>Email: email@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>LinkedIn: linkedin.com/in/username</p>
            <p>GitHub: github.com/username</p>
        </div>
    );
};

export default SideBar;
