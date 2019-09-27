const vocales = ['a', 'e', 'i', 'o', 'u'];

let silabas = [];
let silaba = '';
let pos = 0;
let palabra = '';


function UIState() {
  silaba = `${silaba}i`;
  divide();
}

function UOState() {
  silaba = `${silaba}o`;
  divide();
}

function UEIState() {
  silaba = `${silaba}i`;
  divide();
}

function UEState() {
  silaba = `${silaba}e`;
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'i') {
      UEIState();
    } else {
      pos = pos - 1;
      divide();
    }
  }
}

function UAUState() {
  silaba = `${silaba}u`;
  divide();
}

function UAIState() {
  silaba = `${silaba}i`;
  divide();
}

function UAState() {
  silaba = `${silaba}a`;
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'i':
        UAIState();
        break;
      case 'u':
        UAUState();
        break;
      default:
        pos = pos - 1;
        divide();
        break;
    }
  }
}

function UState() {
  silaba = `${silaba}u`
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'a':
        UAState();
        break;
      case 'e':
        UEState();
        break;
      case 'o':
        UOState();
        break;
      case 'i':
        UIState();
        break;
      default:
        pos = pos - 1;
        divide();
        break;
    }
  }
}

function IUState() {
  silaba = `${silaba}u`;
  divide();
}

function IOState() {
  silaba = `${silaba}o`;
  divide();
}

function IEIState() {
  silaba = `${silaba}i`;
  divide();
}

function IEState() {
  silaba = `${silaba}e`;
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'i') {
      IEIState();
    } else {
      pos = pos - 1;
      divide();
    }
  }
}

function IAUState() {
  silaba = `${silaba}u`;
  divide();
}

function IAIState() {
  silaba = `${silaba}i`;
  divide();
}

function IAState() {
  silaba = `${silaba}a`;
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'i':
        IAIState();
        break;
      case 'u':
        IAUState();
        break;
      default:
        pos = pos - 1;
        divide();
        break;
    }
  }
}

function IState() {
  silaba = `${silaba}i`;
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'a':
        IAState();
        break;
      case 'e':
        IEState();
        break;
      case 'o':
        IOState();
        break;
      case 'u':
        IUState();
        break;
      default:
        pos = pos - 1;
        divide();
        break;
    }
  }
}

function OUState() {
  silaba = `${silaba}u`;
  divide();
}

function OIState() {
  silaba = `${silaba}i`;
  divide();
}

function OState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'i':
        silaba = `${silaba}o`;
        OIState();
        break;
      case 'u':
        silaba = `${silaba}o`;
        OUState();
        break;
      case 'y':
        silaba = `${silaba}o`;
        YState();
        break;
      default:
        if (ch === 'e' || ch === 'a') {
          if (silaba !== '') {
            silaba = `${silaba}o`;
            silabas.push(silaba);
          }
          silaba = '';
        } else {
          silaba = `${silaba}o`;
        }
        pos = pos - 1;
        divide();
        break;
    }
  } else {
    silaba = `${silaba}o`;
  }
}

function EUState() {
  silaba = `${silaba}u`;
  divide();
}

function EIState() {
  silaba = `${silaba}i`;
  divide();
}

function EState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'i':
        silaba = `${silaba}e`;
        EIState();
        break;
      case 'u':
        silaba = `${silaba}e`;
        EUState();
        break;
      case 'y':
        silaba = `${silaba}e`;
        YState();
        break;
      default:
        if (ch === 'a' || ch === 'o') {
          if (silaba !== '') {
            silaba = `${silaba}e`;
            silabas.push(silaba);
          }
          silaba = '';
        } else {
          silaba = `${silaba}e`;
        }
        pos = pos - 1;
        divide();
        break;
    }
  } else {
    silaba = `${silaba}e`;
  }
}

function AUState() {
  silaba = `${silaba}u`;
  divide();
}

function AIState() {
  silaba = `${silaba}i`;
  divide();
}

function AState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'i':
        silaba = `${silaba}a`;
        AIState();
        break;
      case 'u':
        silaba = `${silaba}a`;
        AUState();
        break;
      case 'y':
        silaba = `${silaba}a`;
        YState();
        break;
      default:
        if (ch === 'e' || ch === 'o') {
          if (silaba !== '') {
            silaba = `${silaba}a`;
            silabas.push(silaba);
          }
          silaba = '';
        } else {
          silaba = `${silaba}a`;
        }
        pos = pos - 1;
        divide();
        break;
    }
  } else {
    silaba = `${silaba}a`;
  }
}

function YState() {
  if (pos < palabra.length) {
    if ((pos + 1) < palabra.length && silaba !== '') {
      silabas.push(silaba);
      silaba = '';
    }
    silaba = `${silaba}y`;
    divide();
  } else {
    silaba = `${silaba}y`;
  }
}

function RRState() {
  silaba = `${silaba}r`;
  divide();
}

function RState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}r`;
      RRState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}r`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}r`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}r`;
  }
}

function TRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function TState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r' || ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}t`;
      TRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}t`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}t`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}t`
  }
}

function PRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function PState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r' || ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}p`;
      PRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}p`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}p`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}p`
  }
}

function LLState() {
  silaba = `${silaba}l`;
  divide();
}

function LState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}l`;
      LLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}l`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}l`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}l`;
  }
}

function GRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function GState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r' || ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}g`;
      GRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}g`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}g`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}g`
  }
}

function FRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function FState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r' || ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}f`;
      FRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}f`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}f`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}f`;
  }
}

function DRState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function DState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}d`;
      DRState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}d`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}d`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}d`;
  }
}

function CRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function CState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    if (ch === 'r' || ch === 'l' || ch === 'h') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}c`;
      CRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}c`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}c`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}c`;
  }
}

function BRLState() {
  silaba = `${silaba}${palabra[pos - 1]}`;
  divide();
}

function BState() {
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;

    if (ch === 'r' || ch === 'l') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}b`;
      BRLState();
    } else if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      if (silaba !== '') {
        silabas.push(silaba);
        silaba = '';
      }
      silaba = `${silaba}b`;
      pos = pos - 1;
      divide();
    } else {
      silaba = `${silaba}b`;
      silabas.push(silaba);
      silaba = '';
      pos = pos - 1;
      divide();
    }
  } else {
    silaba = `${silaba}b`;
  }
}

function divide() {
  console.log("Divide: ", pos, palabra[pos]);
  if (pos < palabra.length) {
    const ch = palabra[pos];
    pos = pos + 1;
    switch (ch) {
      case 'b':
        // BState
        BState();
        break;
      case 'c':
        // CState
        CState();
        break;
      case 'd':
        // DState
        DState();
        break;
      case 'f':
        // FState
        FState();
        break;
      case 'g':
        // GState
        GState();
        break;
      case 'l':
        // LState
        LState();
        break;
      case 'p':
        // PState
        PState();
        break;
      case 't':
        // TState
        TState();
        break;
      case 'r':
        // RState
        RState();
        break;
      case 'y':
        // YState
        YState();
        break;
      case 'a':
        // AState
        AState();
        break;
      case 'e':
        // EState
        EState();
        break;
      case 'i':
        // IState
        IState();
        break;
      case 'o':
        // OState
        OState();
        break;
      case 'u':
        // UState
        UState();
        break;
      default:
        // Resto de consonantes
        if (silaba !== '') {
          if (vocales.findIndex(it => palabra[pos] === it) > -1) {
            silabas.push(silaba);
            silaba = `${ch}`;
          } else {
            silaba = `${silaba}${ch}`;
          }
        } else {
          silaba = `${silaba}${ch}`;
        }
        divide();
        break;
    }
  }
}


function getSilabas(word) {
  console.log(word);
  palabra = word;
  silabas = [];
  silaba = '';
  pos = 0;
  divide();
  silabas.push(silaba);
  return silabas;
}

export default getSilabas;
