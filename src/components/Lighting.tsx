import React from 'react';

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      {/* RimLight simulation */}
      <pointLight position={[0, 0, -10]} intensity={1.5} color="cyan" />
    </>
  );
};

export default Lighting;