import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const EditTodo = () => {
    const [complete, setComplete] = useState(false);

    const handleToggleComplete = () => {
        setComplete(!complete);
    };

    return (
        <>
            <div onClick={handleToggleComplete}>
                {complete ? (
                    <FontAwesomeIcon icon={faCheckCircle} />
                ) : (
                    <FontAwesomeIcon icon={faCircle} />
                )}
            </div>
        </>
    );
}

export default EditTodo;
