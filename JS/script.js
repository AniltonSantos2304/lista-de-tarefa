document.addEventListener("DOMContentLoaded", function () {
  class TaskManager {
    constructor() {
      this.tasks = [];
      this.taskIdCounter = 1;
      this.initializeEventListeners();
    }

    initializeEventListeners() {
      const form = document.getElementById("taskForm");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.addTask();
        });
      }

      window.addEventListener("resize", () => {
        this.renderTasks();
      });
    }

    addTask() {
      const taskNameInput = document.getElementById("taskName");
      const taskPrioritySelect = document.getElementById("taskPriority");

      if (!taskNameInput || !taskPrioritySelect) {
        console.error("Elementos do formulário não encontrados");
        return;
      }

      const taskName = taskNameInput.value.trim();
      const taskPriority = taskPrioritySelect.value;

      if (!taskName || !taskPriority) {
        alert("Por favor, preencha todos os campos");
        return;
      }

      const task = {
        id: this.taskIdCounter++,
        name: taskName,
        priority: taskPriority,
      };

      this.tasks.push(task);
      this.renderTasks();
      this.resetForm();
    }

    completeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.renderTasks();
    }

    renderTasks() {
      const tbody = document.getElementById("taskTable");
      const noTasksRow = document.getElementById("noTasksRow");

      if (!tbody || !noTasksRow) {
        console.error("Elementos da tabela não encontrados");
        return;
      }

      const isMobile = window.innerWidth < 576;

      if (this.tasks.length === 0) {
        noTasksRow.style.display = "table-row";
        noTasksRow.innerHTML = `<td colspan="${
          isMobile ? "1" : "3"
        }" class="text-center text-muted">Nenhuma tarefa adicionada</td>`;
        this.clearTaskRows();
        return;
      }

      noTasksRow.style.display = "none";
      this.clearTaskRows();

      this.tasks.forEach((task) => {
        const row = this.createTaskRow(task);
        tbody.appendChild(row);
      });
    }

    createTaskRow(task) {
      const row = document.createElement("tr");
      row.className = `priority-${task.priority}`;

      const isMobile = window.innerWidth < 576;

      if (isMobile) {
        row.innerHTML = `
                            <td>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div class="fw-bold">${task.name}</div>
                                        <small class="text-muted">
                                            <span class="priority-indicator"></span>
                                            ${this.getPriorityLabel(
                                              task.priority
                                            )}
                                        </small>
                                    </div>
                                    <button class="btn btn-success btn-sm" onclick="window.taskManager.completeTask(${
                                      task.id
                                    })">
                                        Concluir
                                    </button>
                                </div>
                            </td>
                        `;
      } else {
        row.innerHTML = `
                            <td>${task.name}</td>
                            <td class="d-none d-sm-table-cell">
                                <span class="priority-indicator"></span>
                                ${this.getPriorityLabel(task.priority)}
                            </td>
                            <td>
                                <button class="btn btn-success btn-sm" onclick="window.taskManager.completeTask(${
                                  task.id
                                })">
                                    Concluir
                                </button>
                            </td>
                        `;
      }

      return row;
    }

    getPriorityLabel(priority) {
      const labels = {
        high: "Alta",
        medium: "Média",
        low: "Baixa",
      };
      return labels[priority] || priority;
    }

    clearTaskRows() {
      const tbody = document.getElementById("taskTable");
      if (tbody) {
        const rows = tbody.querySelectorAll("tr:not(#noTasksRow)");
        rows.forEach((row) => row.remove());
      }
    }

    resetForm() {
      const form = document.getElementById("taskForm");
      if (form) {
        form.reset();
      }
    }
  }

  window.taskManager = new TaskManager();
});