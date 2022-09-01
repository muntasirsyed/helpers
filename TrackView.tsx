import React, { FC, ReactNode } from "react";
import ReactOnScreen, { TrackVisibilityProps } from "react-on-screen";

interface ITrackViewProps extends TrackVisibilityProps {
  children: ReactNode | ReactNode[];
  onVisible?: () => void;
  onInvisible?: () => void;
}

export const TrackView: FC<ITrackViewProps> = ({
  children,
  onVisible,
  onInvisible,
  ...rest
}) => (
  <ReactOnScreen {...rest}>
    {({ isVisible }) => {
      if (isVisible && onVisible) {
        onVisible();
      }
      if (!isVisible && onInvisible) {
        onInvisible();
      }
      return children;
    }}
  </ReactOnScreen>
);
