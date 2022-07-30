import { AbstractPlugin, Viewer } from 'photo-sphere-viewer';
import { Event } from 'uevent';

type Resolution = {
  id: string;
  label: string;
  panorama: any;
};

type ResolutionPluginOptions = {
  resolutions: Resolution[];
  showBadge?: boolean;
};

declare const EVENTS: {
  RESOLUTION_CHANGED: 'resolution-changed',
};

/**
 * @summary Adds a setting to choose between multiple resolutions of the panorama.
 */
declare class ResolutionPlugin extends AbstractPlugin {

  static EVENTS: typeof EVENTS;

  constructor(psv: Viewer, options: ResolutionPluginOptions);

  /**
   * @summary Changes the available resolutions
   */
  setResolutions(resolutions: Resolution[]);

  /**
   * @summary Changes the current resolution
   */
  setResolution(id: string);

  /**
   * @summary Returns the current resolution
   */
  getResolution(): string;

  /**
   * @summary Triggered when the resolution is changed
   */
  on(e: 'resolution-changed', cb: (e: Event, resolutionId: string) => void): this;

}

export { EVENTS, Resolution, ResolutionPlugin, ResolutionPluginOptions };
