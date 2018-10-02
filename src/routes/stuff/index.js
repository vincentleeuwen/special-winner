import { h, Component } from 'preact';

const Stuff = () => {
  let time = new Date().toLocaleTimeString();
  return (
    <div style={{ padding: '150px' }}>
      <h2>Stuff</h2>
      <p>Time: <strong>{ time }</strong>.</p>
    </div>
  );
}

export default Stuff;
