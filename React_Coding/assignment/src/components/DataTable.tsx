import { useCallback, useEffect, useState } from "react";

const DataTable = ({ url }: any) => {
  const [tableData, setTableData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTableData(data);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const headers = Object.keys(tableData?.[0] ?? {});

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((tableRow: any) => (
          <tr>
            {headers.map((header) => (
              <td>{tableRow[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
