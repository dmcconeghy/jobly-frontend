import React from "react";

/** Provides alerts for forms */

function Alert({type = "danger", messages = []}) {
    return (
        <div className={`alert alert-${type}`}>
            {messages.map((error) => <p key={error}>{error}</p>)}
        </div>
    );
}

export default Alert;