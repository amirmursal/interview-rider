import { ChangeEvent, useCallback, useState } from "react";
import "./generatetable.css";

const GenerateTable = () => {
  const [row, setRow] = useState<number>(0);
  const [column, setColumn] = useState<number>(0);

  const handleRowChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRow(Number(event.target.value));
    },
    []
  );

  const handleColumnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setColumn(Number(event.target.value));
    },
    []
  );

  const rows = Array.from({ length: row }, (_, i) => (
    <tr key={i}>
      {Array.from({ length: column }, (_, j) => (
        <td key={j} className="td">
          {j * row + i + 1}
        </td>
      ))}
    </tr>
  ));

  return (
    <div>
      <input type="number" value={row} onChange={handleRowChange} />
      <input type="number" value={column} onChange={handleColumnChange} />

      <table className="table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default GenerateTable;
