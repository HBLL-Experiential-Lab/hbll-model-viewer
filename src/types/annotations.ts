export interface AnnotationData {
  default_color?: string;
  ordered?: boolean;
  annotations: Array<Annotation>;
}

export interface Annotation {
  name?: string;
  description?: string;
  fill_color?: string;
  border_color?: string;
  border_thickness?: number;
  vanish?: boolean;
  position: Position;
  normal: Position;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}