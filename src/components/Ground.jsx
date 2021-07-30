const Ground = props => {

  return <mesh {...props} >
    <boxBufferGeometry args={[2000, 1, 2000]} atacth='geometry' />
    <meshPhysicalMaterial
      attatch='material'
      color={0xA6A6A6}
      dithering={true}
      reciveShadow={true}
    />
  </mesh>
}

export default Ground