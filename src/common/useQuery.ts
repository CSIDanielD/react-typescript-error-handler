import React from "react";
import { useHistory } from "react-router-dom";

export function useQuery(url: string) {
  const history = useHistory();
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(({ code, status, ...apiData }) => {
        if (code > 400) {
          history.replace(history.location.pathname, {
            errorStatusCode: code
          });
        } else {
          setApiData(apiData);
        }
      });
  }, [url, history]);

  return { data: apiData };
}
