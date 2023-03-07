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
  size?: 'sm' | 'md' | 'lg';
  /**
   * CoreButton contents
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
export const CoreButton = ({
    label,
    primary,
    size,
    backgroundColor,
    onClick
}: ButtonProps) => {
  return (
    <Button
        size={size}
        onClick={onClick}
    >
        {label}
    </Button>
  );
};
