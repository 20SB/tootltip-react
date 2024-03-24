import Tooltip from "./components/Tooltip";

function App() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Tooltip position="top" text="Top Tooltip">
                <button>Hover me to see top tooltip</button>
            </Tooltip>
            <Tooltip position="bottom" text="Bottom Tooltip">
                <button>Hover me to see bottom tooltip</button>
            </Tooltip>
            <Tooltip position="left" text="Left Tooltip">
                <button>Hover me to see left tooltip</button>
            </Tooltip>
            <Tooltip position="right" text="Right Tooltip">
                <button>Hover me to see right tooltip</button>
            </Tooltip>
        </div>
    );
}

export default App;
