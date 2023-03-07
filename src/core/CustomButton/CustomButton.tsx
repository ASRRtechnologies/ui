import React from 'react';
import {Button} from "@mantine/core";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * CustomButton contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
}: ButtonProps) => {
  return (
    <Button title={"hi"} >
      Hi there
    </Button>
  );
};
