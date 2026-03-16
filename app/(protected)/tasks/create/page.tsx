export default function CreateTask() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create Task</h1>
        <p className="text-gray-600 mt-2">Add a new task to your workflow</p>
      </div>

      <div className="bg-white rounded-lg shadow max-w-2xl">
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="Task Title"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                placeholder="Task Description"
                className="w-full border border-gray-300 rounded px-3 py-2 h-24"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Due Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
