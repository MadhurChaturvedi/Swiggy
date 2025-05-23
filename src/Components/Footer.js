
export default function Footer() {
    const Logo = {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        gap: "5px",
    }
    return (
        <footer className="footer" style={{ width: "100vw", height: "15vh", background: "FFF", color: "#8395a7", border: "1px solid black" }}>
            <br />
            © 2025 YourCompanyName. All rights reserved.
        </footer>
    )
}
