import React from 'react';
import { usePageContext } from '../renderer/usePageContext';

export { Link }

function Link(props: { href?: string; id?:string; className?: string; children: React.ReactNode }) {
  const pageContext = usePageContext();
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  const id = props.id
  return <a {...props} id={id} className={className} style={{ width: '100%' }} />
}
