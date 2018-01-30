import React from 'react';
import { render } from 'react-dom';

const poem = `You are old, Father William (Carroll)
“You are old, father William,” the young man said,
“And your hair has become very white;
And yet you incessantly stand on your head–
Do you think, at your age, it is right?”

“In my youth,” father William replied to his son,
“I feared it might injure the brain;
But now that I’m perfectly sure I have none,
Why, I do it again and again.”`

class Readerv2 extends React.Component {
  constructor() {
    super();
    this.fontArr = ["", "small", "medium", "large"]
    this.state = {
      fontSize: "small"
    }
  }

  //changes the font size at the class name attribute
  handleFontSelction = (e) => {
    this.setState ({
      fontSize: e.target.value
    })
  }


  render() {
    return (
      <div>
        <p>Font Size: <select 
          onChange={this.handleFontSelction}>
            {this.fontArr.map(ele => {
              return <option>{ele}</option>
            })}
          </select>
        </p>
        <pre
          className={this.state.fontSize}>
          {poem}
        </pre>
      </div>
    )
  }
}

render(<Readerv2 />, document.getElementById('root'));
