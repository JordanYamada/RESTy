import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function Entry(props) {

  return (
    <Accordion.Item eventKey={props.key}>
        <Accordion.Header>
          {/* Method: {props.entry.method}  URL: {props.entry.url} */}
          Hello
          </Accordion.Header>
        <Accordion.Body>
          {props.entry.data.results}
          Hello
        </Accordion.Body>
      </Accordion.Item>
  )

}

export default Entry;