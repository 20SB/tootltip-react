import Tooltip from "./components/Tooltip"; // Import the Tooltip component

function App() {
    return (
        <div
            style={{
                display: "flex", // Use flexbox layout to arrange the buttons
                justifyContent: "space-evenly", // Evenly space the buttons horizontally
                alignItems: "center", // Center the buttons vertically
                width: "100vw", // Set the width to 100% of the viewport width
                height: "100vh", // Set the height to 100% of the viewport height
            }}
        >
            {/* Tooltip with position at the top */}
            <Tooltip position="top" text="Top Tooltip">
                <button>Hover me to see top tooltip</button>
            </Tooltip>

            {/* Tooltip with position at the bottom */}
            <Tooltip position="bottom" text="Bottom Tooltip">
                <button>Hover me to see bottom tooltip</button>
            </Tooltip>

            {/* Tooltip with position on the left */}
            <Tooltip position="left" text="Left Tooltip">
                <button>Hover me to see left tooltip</button>
            </Tooltip>

            {/* Tooltip with position on the right */}
            <Tooltip position="right" text="Right Tooltip">
                <button>Hover me to see right tooltip</button>
            </Tooltip>
        </div>
    );
}

export default App;
