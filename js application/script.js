// 1. VARIABLE DECLARATIONS AND TYPES
const targetThreat = Math.floor(Math.random() * 100) + 1; // Number type
let coreStability = 100;                                 // Number type
let isConnected = true;                                  // Boolean type
let attempts = 0;                                        // Number type

// 2. EVENT HANDLING: Button Click
document.getElementById('breakBtn').addEventListener('click', function() {
    const userInput = document.getElementById('logicKey').value;
    const key = parseInt(userInput); // Type Conversion

    if (isNaN(key)) {
        addLog("ERROR: INVALID_INPUT_TYPE");
        return;
    }

    processEncryption(key);
});

// 3. EVENT HANDLING: Input Event (Real-time Scan)
function realTimeScan(val) {
    const msg = document.getElementById('system-msg');
    msg.innerText = val ? `SCANNING_KEY: ${val}...` : "> SYSTEM: Enter Logic Key (1-100).";
}

function processEncryption(guess) {
    attempts++;
    let outcome = "";
    
    // 4. IF-ELSE CONTROL STATEMENTS (Distance Logic)
    if (guess === targetThreat) {
        outcome = "SUCCESS";
        document.getElementById('system-msg').innerText = ">> ENCRYPTION_BROKEN. ACCESS_GRANTED.";
    } else {
        coreStability -= 20;
        document.getElementById('stability').innerText = coreStability;
        
        // Logical Hinting
        let diff = Math.abs(guess - targetThreat);
        if (diff > 40) {
            addLog(`CRITICAL: Offset too large. [${guess}]`);
        } else {
            addLog(`WARNING: Near target resonance. [${guess}]`);
        }
    }

    // 5. SWITCH CONTROL STATEMENTS (Stability Consequences)
    switch (coreStability) {
        case 80:
            addLog("ALERT: Firewall responding...");
            break;
        case 40:
            addLog("CRITICAL: Backdoor closing...");
            break;
        case 0:
            addLog("FAILURE: System Lockout. Threat won.");
            document.getElementById('breakBtn').disabled = true;
            break;
    }
}

function addLog(text) {
    const logArea = document.getElementById('logWindow');
    const entry = document.createElement('div');
    entry.className = "log-entry";
    entry.innerText = `> ${text}`;
    logArea.prepend(entry);
}
