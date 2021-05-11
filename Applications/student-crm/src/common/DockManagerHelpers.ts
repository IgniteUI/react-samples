import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";

export class DockManagerHelpers {

    public static createContentPane(contentID: string, paneHeader: string): any {
        const pane = {
          header: paneHeader,
          type: IgcDockManagerPaneType.contentPane,
          contentId: contentID,
        };
        return pane;
    }
      
    public static createSplitPane(orientation: IgcSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgcDockManagerPaneType.splitPane,
            orientation: orientation,
            panes: contentPanes,
            size: size
        };
        return pane;
    }
      
    public static createTabPane(orientation: IgcSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
          type: IgcDockManagerPaneType.tabGroupPane,
          panes: contentPanes,
          size: size
        };
        return pane;
    }
}