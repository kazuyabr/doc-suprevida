import React, { MouseEventHandler } from 'react'
import styles from '../styles/components/Tags.module.css'

interface Props {
  width?: string
  height?: string
  onClick?: () => void
}

interface PropsCicle {
  width?: string
  height?: string
  color: 'yellow' | 'green' | 'red' | 'grey'
}

interface IProps_Square {
  message: string
}

export const Tag: React.FC<Props> = ({ children, ...rest }) => (
  <div
    className={styles.tag}
    style={{ width: rest.width, height: rest.height }}
  >
    <span>{children}</span>
  </div>
)

export const TagIcon: React.FC<Props> = ({ children, ...rest }) => (
  <div
    className={styles.tagIcon}
    style={{ width: rest.width, height: rest.height }}
  >
    <span>{children}</span>
    <section {...rest} onClick={rest.onClick}>
      <img src="/icons/closed.svg" alt="Sair" />
    </section>
  </div>
)

export const TagCircle: React.FC<PropsCicle> = props => (
  <div
    className={`${styles.tagCicle} ${styles[props.color]}`}
    style={{ width: props.width, height: props.height }}
  ></div>
)
