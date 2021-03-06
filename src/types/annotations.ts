export interface AnnotationData {
  default_color?: string;
  ordered?: boolean;
  annotations: Array<Annotation>;
}

export interface Annotation {
  name: string | undefined;
  description?: string;
  descriptionFileName?: string;
  fill_color?: string;
  border_color?: string;
  border_thickness?: number;
  vanish?: boolean;
  position: Position;
  normal: Position;
  cameraOrbit: CameraOrbit;
  markdown?: Boolean;
  uid: string;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface CameraOrbit {
  theta: number;
  phi: number;
  radius: number;
}

export interface Manifest {
  url: string;
  entries: Array<FileEntry>;
}

export interface FileEntry {
  name: string;
  url: string;
}

export interface File {
  name: string;
  text: string;
}
