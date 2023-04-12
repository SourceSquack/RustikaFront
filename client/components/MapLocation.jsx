import React from 'react'

const MapLocation = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.25739375847!2d-75.6614356!3d4.6714789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388970a9e30275%3A0x9ee9127e2b9adef7!2sRustika%20parrilla%20Cafe%20Bar!5e0!3m2!1sen!2sco!4v1681166679329!5m2!1sen!2sco"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        className='w-full h-full rounded-xl' allowfullscreen=""></iframe>
    </div>
  )
}

export default MapLocation