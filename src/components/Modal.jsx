export const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return <div><button onClick={onClose}>close</button>{children}</div>
};

export const Form = ({mode, taskId}) => {
    const [formState, setFormState] = useState();

    const tasks = useContext(TasksContext);

    useEffect(() => {
        if (!mode) {
            return;
        }

        if (mode === 'create') {
            setFormState({
                title: '',
                description: '',
            });
        }

        if (mode === 'edit') {
            const task = tasks.find(t => t.id === taskId);

            setFormState({
                title: task.title,
                description: task.description,
            })
        }

    }, [mode]);

    return <div>
        <input>1</input>
        <input>2</input>
        <input>3</input>
    </div>
};

export const Header = ({mode}) => {
    return <>
        {mode === 'create' && <div>Create</div>}
        {mode === 'edit' && <div>Edit</div>}
    </>
};

export const Footer = () => {
    return <div>
        <button>submit</button>
    </div>
};

const TaskModal = ({mode}) => {
    return <Modal>
        <Header mode={mode} />
        <Form />
        <Footer />
    </Modal>
}