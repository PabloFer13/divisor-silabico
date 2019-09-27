import React, { Component } from 'react';
import styled from 'styled-components';
import divisor from './divisor';
import pistas from './assets/audio';


const Container = styled.div`
  margin-top: 50px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palabra: '',
      silabas: [],
      pistasAudio: [],
      currentTrack: 0,
    }
  }

  audioRef = null;

  audioRefFunction = ref => {
    this.audioRef = ref;
  }

  playAudio = () => {
    this.audioRef.play();
  }

  setTrack = () => {
    const { pistasAudio, currentTrack } = this.state;
    this.audioRef.src = currentTrack > -1 ? pistasAudio[currentTrack] : null;
  }

  nextAudio = () => {
    this.setState(state => {
      const { currentTrack, pistasAudio } = state;
      return (currentTrack + 1) < pistasAudio.length ? { currentTrack: currentTrack + 1 } : { currentTrack: -1 };
    }, this.setTrack);
  }

  handleChange = ({ target }) => {
    const { value: palabra } = target;
    const validRegExp = /\d+/;
    if (!validRegExp.test(palabra)) {
      this.setState({ palabra });
    }
  }

  verifyWord = () => {
    const { palabra } = this.state;
    const palabrasMin = palabra.toLowerCase();
    const palabrasNoNewLine = palabrasMin.replace(/\n/g, ' ');
    const palabras = palabrasNoNewLine.split(' ');
    const silabas = palabras.map(wrd => divisor(wrd));
    const pistasAudio = silabas.reduce((acc, wrd) => {
      const slbs = wrd.reduce((accp, sb) => {
        return pistas[sb] ? [...accp, pistas[sb]] : [...accp];
      }, [])
      return [...acc, ...slbs];
    }, [])
    this.audioRef.src = pistasAudio[0];
    this.setState({ silabas, pistasAudio, currentTrack: 0 });
  }


  render() {
    const {
      palabra,
      silabas
    } = this.state;
    console.log(silabas);
    return (
      <Container className="contianer">
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="validateString" className="sr-only">Palabra</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="validateString"
                        placeholder="Ingrese las palabras a dividir"
                        value={palabra}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button type="button" className="btn btn-primary mb-2" onClick={this.verifyWord}>Identificar Palabra</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <audio controls ref={this.audioRefFunction} onCanPlay={this.playAudio} onEnded={this.nextAudio} />
            </div>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col text-center">
            {silabas.reduce((acc, wrd) => {
              const slbs = wrd.reduce((acc, it, index) => `${acc}${`${it}${index === (wrd.length - 1) ? '' : ' - '}`}`, '')
              return [...acc, <p>{slbs}</p>];
            }, [])}
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
