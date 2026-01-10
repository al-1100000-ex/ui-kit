import {useCallback} from "react";
import {type handleDataRequestProps} from "../types/types";
import {fetchData} from "../utils/api";

export function useDataReqeust() {
  return useCallback(
    async function handleDataRequest<ResultT, PayloadT = undefined>(
      data: handleDataRequestProps<PayloadT>,
    ): Promise<ResultT | undefined> {
      const errorTitle = data.errorTitle ?? "Fehler beim Laden der Daten";

      try {
        const result = await fetchData<ResultT, PayloadT>(data.route, data.backendURL, data.payload as PayloadT);
        if(data.handleDispatch && data.dispatch) {
          data.dispatch(data.handleDispatch(result));
        }
        if(data.onSuccess && data.onSuccess.length > 0) {
          for(const func of data.onSuccess) {
            func();
          }
        }
        if(data.successToast && data.successToast.title && data.successToast.text) {
          Toaster.showTemplatedToast({
            type: 'success',
            title: data.successToast.title,
            subtitle: data.successToast.text,
            autoClose: data.successToast.autoClose ?? true,
            autoCloseTime: data.successToast.autoCloseTime ?? 3000,
          })
        }
        return result;
      } catch (error: unknown) {
        let message = "Ein Fehler ist aufgetreten";

        if (error instanceof Error) {
          message = error.message;
        } else if (typeof error === "object" && error !== null && "message" in error) {
          message = String((error as { message?: string }).message);
        }

        console.error(data.route, errorTitle, message, data.payload);

        if (!data.suppressToast) {
          const errorObj = error as { code: string; message: string; };
          let messageString = `[${errorObj.code}] ${errorObj.message} at route: ${data.route}`;
          if (data.payload) {
            messageString += ` with Payload: ${JSON.stringify(data.payload)}`;
          }
          Toaster.showTemplatedToast({
            type: 'error',
            title: data.errorTitle ?? 'Fehler',
            subtitle: data.errorMessage ?? messageString,
            autoClose: false,
          })
        }

        return undefined;
      } finally {
        if (data.onFinish) {
          data.onFinish();
        }
      }
    },
    [],
  );
}
