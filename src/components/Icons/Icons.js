import React from 'react';
import IconsSVG from '../../images/icons.svg';

function Icons({name, color, size, className, role, alt}) {

  return(
    <svg className={className} fill={color} width={size} height={size} role={role} aria-label={alt}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons;
