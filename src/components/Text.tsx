// <Text fontSize="40px">Lorem ipsum</Text> -> <p>Lorem ipsum</p>

// import { JsxElement } from "typescript";
import type { ReactNode } from 'react';

type TextProps = {
  fontSize?: number | string;
  // children: string;
  // children: JsxElement; // 1, 2, 3, Lorem ipsum
  children: ReactNode; // 1, 2, 3, Lorem, <span>Lorem ipsum</span>
}

function Text(props: TextProps) { // props.fontSize
  const { fontSize, children } = props;
  const styles = {
    fontSize: fontSize ? fontSize : 16 // 20 | "20px"
  }
  return <p style={styles}>{children}</p>;
}

export { Text };
