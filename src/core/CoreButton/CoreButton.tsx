import React from 'react';
import {Button, ButtonProps} from "@mantine/core";


/**
 * Primary UI component for user interaction
 */
export const CoreButton = (props: ButtonProps) => {
  return (
    <Button
        {...props}
        radius={"xl"}
    />
  );
};
