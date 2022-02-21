import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFileDrop } from 'easy-file-drop';
import ShowDragging from './Components/ShowDragging';
import DowpDown from './Components/DropDown';
import ViewJSON from './Components/ViewJSON';
import AddRole from './Components/AddRole';
import AddPermission from './Components/AddPermission';

function App() {
  const [json, setJSON] = useState({})
  const options = [
    { value: 'Block', label: 'Block' },
    { value: 'Allow', label: 'Allow' },
    { value: 'RdOwner', label: 'RdOwner' },
    { value: 'WrOwner', label: 'WrOwner' },
    { value: 'Self', label: 'Self' },
  ]

  const flat = (obj, final, keyname = '') => {
    for (const key in obj) {
      const newKey = `${keyname}${keyname ? '.' : ''}${key}`
      if (typeof obj[key] === 'object') flat(obj[key], final, newKey)
      else final[newKey] = obj[key]
    }
    return final
  }
  
  const { tableBody, tableHeader } = useMemo(() => {
    try {
      let flatPermissions = {}
      const perRole = Object.keys(json).reduce((prev, current) => {
        const temp = {}
        const rolePermissions = flat(json[current], temp)
        flatPermissions = { ...flatPermissions, ...rolePermissions }
        prev[current] = rolePermissions
        return prev
      }, {})
      return { tableBody: perRole, tableHeader: Object.keys(flatPermissions) }
    } catch (error) {
      console.error(error)
      return { tableBody: {}, tableHeader: [] }
    }
  }, [json])

  const onFiles = useCallback(async (files) => {
    try {
      function onReaderLoad(event) {
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        setJSON(obj)
        console.log(obj)
      }
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(files[0]);
    } catch (error) {
      alert('please drop a valid json file')
    }
  }, [])

  const { element, dragging } = useFileDrop(onFiles)

  const changeAt = (role, at, value) => {
    const route = at.split('.')
    let target = json[role]
    route.forEach((key, i) => {
      if (i == route.length - 1) {
        target[key] = value
      } else {
        if (!target[key]) target[key] = {}
        target = target[key]
      }
    })
    setJSON({ ...json })
  }
  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(json))
    alert('JSON Copied')
  }
  const addRole = (name) => {
    json[name] = {}
    setJSON({ ...json })
    tableHeader.forEach(permission => changeAt(name, permission, 'Block'))
  }
  const addPermission = (permission) => {
    Object.keys(tableBody).forEach(role => changeAt(role, permission, 'Block'))
  }
  useEffect(() => {
    if (Object.keys(json).length > 0) {
      localStorage.setItem('json', JSON.stringify(json))
    }
  }, [json])
  useEffect(() => {
    const backup = localStorage.getItem('json')
    try {
      const restored = JSON.parse(backup)
      if (restored) {
        setJSON(restored)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <div className="App" ref={element}>
      {dragging && <ShowDragging />}
      {!dragging &&
        <>
          <div className='table-box'>
            <h3>Form your schema (Drop a JSON file)</h3>
            <div className='controls my-2'>
              <div className='mb-2 control'>
                <AddRole addRole={addRole} />
              </div>
              <div className='mb-2 control'>
                <AddPermission addPermission={addPermission} />
              </div>
            </div>
            <table className='table table-warning'>
              <thead class="thead-dark">
                <tr>
                  <th>Permissions</th>
                  {Object.keys(tableBody).map(role => <th key={role}>{role}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableHeader.map(permission => <tr key={permission}>
                  <td>{permission}</td>
                  {Object.keys(tableBody).map(role => (
                    <td key={permission + role}>
                      <DowpDown options={options} value={tableBody[role][permission]} onChange={(e) => changeAt(role, permission, e.target.value)} />
                    </td>
                  ))}
                </tr>)}
              </tbody>
            </table>
          </div>
          <div className='json-box'>
            <button className='btn btn-primary copy' onClick={copy}>Copy</button>
            <ViewJSON json={json} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
