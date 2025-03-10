import * as React from "react";
import { SVGProps } from "react";
import clsx from "clsx";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.6}
      d="m14.572 16.092-.566.566-.566-.566-4.526-4.526a.387.387 0 0 0-.53.003.362.362 0 0 0 .004.51l5.355 5.355a.362.362 0 0 0 .514 0l5.355-5.355a.362.362 0 0 0 0-.513.362.362 0 0 0-.514 0l-4.526 4.526Z"
    />
  </svg>
);
export const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 18 7-7 7 7"
    />
  </svg>
);

interface LoaderProps extends SVGProps<SVGSVGElement> {
  loading?: boolean;
}

export const Loader = ({ loading, className, ...props }: LoaderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    width={26}
    height={26}
    fill="none"
    className={clsx("inline-block", loading && "animate-spin", className)}
    {...props}
  >
    <path
      fill="#fff"
      d="M13.085 2.438c-5.193 0-9.462 3.968-9.878 9.027h-1.04a.812.812 0 0 0-.573 1.39l1.82 1.805a.813.813 0 0 0 1.145 0l1.82-1.805a.813.813 0 0 0-.573-1.39H4.84c.411-4.15 3.941-7.402 8.246-7.402 3 0 5.627 1.58 7.082 3.946a.813.813 0 1 0 1.384-.851 9.921 9.921 0 0 0-8.466-4.72Z"
    />
    <path
      fill="#fff"
      d="M22.578 11.339a.812.812 0 0 0-1.142 0l-1.827 1.805a.813.813 0 0 0 .571 1.39h.974c-.413 4.15-3.955 7.403-8.281 7.403a8.339 8.339 0 0 1-7.112-3.947.813.813 0 1 0-1.383.853 9.964 9.964 0 0 0 8.495 4.72c5.208 0 9.495-3.966 9.913-9.028h1.047a.813.813 0 0 0 .572-1.39l-1.827-1.806Z"
      opacity={0.5}
    />
  </svg>
);
