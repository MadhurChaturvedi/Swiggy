import { useRouteError } from "react-router";
const Error = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            padding: '20px',
        },
        image: {
            width: '40%',
            height: '60%',
            marginBottom: '20px',

        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        message: {
            fontSize: '1.2rem',
        }
    };

    const err = useRouteError();
    console.log(err);

    return (
        <div style={styles.container}>
            <img
                src="https://i.imgflip.com/6m3ddk.png"
                alt="Error"
                style={styles.image}
            />
            <div style={styles.title}>Something went wrong!</div>
            <p style={styles.message}>{err.status}</p>
        </div>
    );
};

export default Error;
